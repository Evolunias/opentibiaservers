import NewUnlineDownloadKeywordPage, { generateMetadata } from './new-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineDownloadKeywordPage />;
}
