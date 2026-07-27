import OfficialOxygenotDownloadKeywordPage, { generateMetadata } from './official-oxygenot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOxygenotDownloadKeywordPage />;
}
