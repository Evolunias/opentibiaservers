import MarolaotFranceServerKeywordPage, { generateMetadata } from './marolaot-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotFranceServerKeywordPage />;
}
