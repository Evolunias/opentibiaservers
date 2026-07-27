import NewTibianusDownloadKeywordPage, { generateMetadata } from './new-tibianus-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusDownloadKeywordPage />;
}
