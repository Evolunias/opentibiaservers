import BestOxygenotDownloadKeywordPage, { generateMetadata } from './best-oxygenot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestOxygenotDownloadKeywordPage />;
}
