import OfficialMiracleDownloadKeywordPage, { generateMetadata } from './official-miracle-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleDownloadKeywordPage />;
}
