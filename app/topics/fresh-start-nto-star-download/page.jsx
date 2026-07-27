import FreshStartNtoStarDownloadKeywordPage, { generateMetadata } from './fresh-start-nto-star-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNtoStarDownloadKeywordPage />;
}
