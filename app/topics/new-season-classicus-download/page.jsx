import NewSeasonClassicusDownloadKeywordPage, { generateMetadata } from './new-season-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusDownloadKeywordPage />;
}
