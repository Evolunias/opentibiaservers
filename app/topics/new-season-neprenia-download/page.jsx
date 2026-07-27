import NewSeasonNepreniaDownloadKeywordPage, { generateMetadata } from './new-season-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNepreniaDownloadKeywordPage />;
}
