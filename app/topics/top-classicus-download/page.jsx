import TopClassicusDownloadKeywordPage, { generateMetadata } from './top-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusDownloadKeywordPage />;
}
