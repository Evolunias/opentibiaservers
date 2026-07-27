import FreshStartRubinotDownloadKeywordPage, { generateMetadata } from './fresh-start-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRubinotDownloadKeywordPage />;
}
