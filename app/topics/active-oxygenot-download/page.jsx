import ActiveOxygenotDownloadKeywordPage, { generateMetadata } from './active-oxygenot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOxygenotDownloadKeywordPage />;
}
