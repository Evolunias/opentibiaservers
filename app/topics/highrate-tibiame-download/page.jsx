import HighrateTibiameDownloadKeywordPage, { generateMetadata } from './highrate-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiameDownloadKeywordPage />;
}
