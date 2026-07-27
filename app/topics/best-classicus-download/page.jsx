import BestClassicusDownloadKeywordPage, { generateMetadata } from './best-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestClassicusDownloadKeywordPage />;
}
