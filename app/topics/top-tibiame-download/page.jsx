import TopTibiameDownloadKeywordPage, { generateMetadata } from './top-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameDownloadKeywordPage />;
}
