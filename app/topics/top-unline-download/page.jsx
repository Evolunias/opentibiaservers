import TopUnlineDownloadKeywordPage, { generateMetadata } from './top-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineDownloadKeywordPage />;
}
