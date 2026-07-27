import OxygenotBrazilServerKeywordPage, { generateMetadata } from './oxygenot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotBrazilServerKeywordPage />;
}
