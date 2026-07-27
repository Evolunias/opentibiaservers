import ImperianicMexicoServerKeywordPage, { generateMetadata } from './imperianic-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicMexicoServerKeywordPage />;
}
