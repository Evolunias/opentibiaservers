import NewSeasonMiracleOtsKeywordPage, { generateMetadata } from './new-season-miracle-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMiracleOtsKeywordPage />;
}
