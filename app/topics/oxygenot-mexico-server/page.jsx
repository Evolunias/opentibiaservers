import OxygenotMexicoServerKeywordPage, { generateMetadata } from './oxygenot-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotMexicoServerKeywordPage />;
}
