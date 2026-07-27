import BestRealestaDownloadKeywordPage, { generateMetadata } from './best-realesta-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealestaDownloadKeywordPage />;
}
