import MarolaotFranceServersKeywordPage, { generateMetadata } from './marolaot-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotFranceServersKeywordPage />;
}
