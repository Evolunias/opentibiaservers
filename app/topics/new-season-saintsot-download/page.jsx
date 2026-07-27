import NewSeasonSaintsotDownloadKeywordPage, { generateMetadata } from './new-season-saintsot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSaintsotDownloadKeywordPage />;
}
