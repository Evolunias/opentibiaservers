import NewAlasteraDownloadKeywordPage, { generateMetadata } from './new-alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraDownloadKeywordPage />;
}
