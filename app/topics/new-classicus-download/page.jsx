import NewClassicusDownloadKeywordPage, { generateMetadata } from './new-classicus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusDownloadKeywordPage />;
}
