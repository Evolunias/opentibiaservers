import BestNepreniaDownloadKeywordPage, { generateMetadata } from './best-neprenia-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNepreniaDownloadKeywordPage />;
}
