import TopAlasteraDownloadKeywordPage, { generateMetadata } from './top-alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraDownloadKeywordPage />;
}
