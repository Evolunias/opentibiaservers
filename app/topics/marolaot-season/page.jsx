import MarolaotSeasonKeywordPage, { generateMetadata } from './marolaot-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotSeasonKeywordPage />;
}
