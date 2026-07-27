import NewSeasonTibiaraDownloadKeywordPage, { generateMetadata } from './new-season-tibiara-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraDownloadKeywordPage />;
}
