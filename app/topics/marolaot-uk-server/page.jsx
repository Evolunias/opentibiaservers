import MarolaotUkServerKeywordPage, { generateMetadata } from './marolaot-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotUkServerKeywordPage />;
}
