import LowrateTibiameDownloadKeywordPage, { generateMetadata } from './lowrate-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiameDownloadKeywordPage />;
}
