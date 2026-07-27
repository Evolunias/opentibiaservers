import ActiveUnlineDownloadKeywordPage, { generateMetadata } from './active-unline-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineDownloadKeywordPage />;
}
