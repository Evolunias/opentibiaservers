import NewYurotsDownloadKeywordPage, { generateMetadata } from './new-yurots-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsDownloadKeywordPage />;
}
