import BestAmeriaDownloadKeywordPage, { generateMetadata } from './best-ameria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAmeriaDownloadKeywordPage />;
}
