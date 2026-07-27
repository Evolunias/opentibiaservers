import BestRubinotDownloadKeywordPage, { generateMetadata } from './best-rubinot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRubinotDownloadKeywordPage />;
}
