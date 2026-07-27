import FreshStartDownloadUsaKeywordPage, { generateMetadata } from './fresh-start-download-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDownloadUsaKeywordPage />;
}
