import NewRubinotDownloadKeywordPage, { generateMetadata } from './new-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRubinotDownloadKeywordPage />;
}
