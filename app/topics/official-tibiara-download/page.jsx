import OfficialTibiaraDownloadKeywordPage, { generateMetadata } from './official-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaraDownloadKeywordPage />;
}
