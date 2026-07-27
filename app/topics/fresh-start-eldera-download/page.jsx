import FreshStartElderaDownloadKeywordPage, { generateMetadata } from './fresh-start-eldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaDownloadKeywordPage />;
}
