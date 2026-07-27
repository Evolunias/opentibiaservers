import FreshStartAmeriaDownloadKeywordPage, { generateMetadata } from './fresh-start-ameria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAmeriaDownloadKeywordPage />;
}
