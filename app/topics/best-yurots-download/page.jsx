import BestYurotsDownloadKeywordPage, { generateMetadata } from './best-yurots-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsDownloadKeywordPage />;
}
