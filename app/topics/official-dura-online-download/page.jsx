import OfficialDuraOnlineDownloadKeywordPage, { generateMetadata } from './official-dura-online-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDuraOnlineDownloadKeywordPage />;
}
