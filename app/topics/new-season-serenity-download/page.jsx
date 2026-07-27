import NewSeasonSerenityDownloadKeywordPage, { generateMetadata } from './new-season-serenity-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityDownloadKeywordPage />;
}
