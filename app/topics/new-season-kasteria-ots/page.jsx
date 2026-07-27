import NewSeasonKasteriaOtsKeywordPage, { generateMetadata } from './new-season-kasteria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaOtsKeywordPage />;
}
