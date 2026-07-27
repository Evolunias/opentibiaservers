import NewSeasonCarlinotDownloadKeywordPage, { generateMetadata } from './new-season-carlinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCarlinotDownloadKeywordPage />;
}
