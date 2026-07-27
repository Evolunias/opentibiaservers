import NewSeasonOxygenotDownloadKeywordPage, { generateMetadata } from './new-season-oxygenot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotDownloadKeywordPage />;
}
