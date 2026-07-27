import BestKasteriaDownloadKeywordPage, { generateMetadata } from './best-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestKasteriaDownloadKeywordPage />;
}
