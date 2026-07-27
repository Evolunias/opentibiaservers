import TopYurotsDownloadKeywordPage, { generateMetadata } from './top-yurots-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsDownloadKeywordPage />;
}
