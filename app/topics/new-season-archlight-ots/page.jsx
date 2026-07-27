import NewSeasonArchlightOtsKeywordPage, { generateMetadata } from './new-season-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightOtsKeywordPage />;
}
