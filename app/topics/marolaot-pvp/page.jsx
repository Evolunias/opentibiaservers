import MarolaotPvpKeywordPage, { generateMetadata } from './marolaot-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotPvpKeywordPage />;
}
