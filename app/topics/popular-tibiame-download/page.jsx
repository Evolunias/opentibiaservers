import PopularTibiameDownloadKeywordPage, { generateMetadata } from './popular-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameDownloadKeywordPage />;
}
