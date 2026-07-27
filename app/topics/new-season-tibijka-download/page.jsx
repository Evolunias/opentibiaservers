import NewSeasonTibijkaDownloadKeywordPage, { generateMetadata } from './new-season-tibijka-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaDownloadKeywordPage />;
}
