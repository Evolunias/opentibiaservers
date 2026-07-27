import NewSeasonUnlineDownloadKeywordPage, { generateMetadata } from './new-season-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonUnlineDownloadKeywordPage />;
}
