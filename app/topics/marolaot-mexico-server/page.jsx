import MarolaotMexicoServerKeywordPage, { generateMetadata } from './marolaot-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotMexicoServerKeywordPage />;
}
