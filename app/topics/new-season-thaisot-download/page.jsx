import NewSeasonThaisotDownloadKeywordPage, { generateMetadata } from './new-season-thaisot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotDownloadKeywordPage />;
}
