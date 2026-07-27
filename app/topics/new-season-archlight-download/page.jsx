import NewSeasonArchlightDownloadKeywordPage, { generateMetadata } from './new-season-archlight-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArchlightDownloadKeywordPage />;
}
