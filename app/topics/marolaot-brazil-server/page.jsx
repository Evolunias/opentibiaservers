import MarolaotBrazilServerKeywordPage, { generateMetadata } from './marolaot-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotBrazilServerKeywordPage />;
}
