import FunServerDownloadKeywordPage, { generateMetadata } from './fun-server-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FunServerDownloadKeywordPage />;
}
