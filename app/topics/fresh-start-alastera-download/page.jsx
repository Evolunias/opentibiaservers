import FreshStartAlasteraDownloadKeywordPage, { generateMetadata } from './fresh-start-alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraDownloadKeywordPage />;
}
