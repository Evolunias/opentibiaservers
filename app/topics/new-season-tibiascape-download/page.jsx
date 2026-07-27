import NewSeasonTibiascapeDownloadKeywordPage, { generateMetadata } from './new-season-tibiascape-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeDownloadKeywordPage />;
}
