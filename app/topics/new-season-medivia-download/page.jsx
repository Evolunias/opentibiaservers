import NewSeasonMediviaDownloadKeywordPage, { generateMetadata } from './new-season-medivia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMediviaDownloadKeywordPage />;
}
