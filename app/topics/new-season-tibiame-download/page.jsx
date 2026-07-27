import NewSeasonTibiameDownloadKeywordPage, { generateMetadata } from './new-season-tibiame-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiameDownloadKeywordPage />;
}
