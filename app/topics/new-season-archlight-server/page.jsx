import NewSeasonArchlightServerKeywordPage, { generateMetadata } from './new-season-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightServerKeywordPage />;
}
