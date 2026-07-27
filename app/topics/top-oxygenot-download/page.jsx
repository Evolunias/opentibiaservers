import TopOxygenotDownloadKeywordPage, { generateMetadata } from './top-oxygenot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOxygenotDownloadKeywordPage />;
}
