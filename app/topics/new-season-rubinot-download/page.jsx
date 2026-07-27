import NewSeasonRubinotDownloadKeywordPage, { generateMetadata } from './new-season-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotDownloadKeywordPage />;
}
