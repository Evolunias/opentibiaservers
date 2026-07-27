import OfficialTibiameDownloadKeywordPage, { generateMetadata } from './official-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiameDownloadKeywordPage />;
}
