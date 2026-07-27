import BestAlasteraDownloadKeywordPage, { generateMetadata } from './best-alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraDownloadKeywordPage />;
}
