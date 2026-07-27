import ActiveCanobDownloadKeywordPage, { generateMetadata } from './active-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobDownloadKeywordPage />;
}
