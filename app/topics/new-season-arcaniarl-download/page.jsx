import NewSeasonArcaniarlDownloadKeywordPage, { generateMetadata } from './new-season-arcaniarl-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlDownloadKeywordPage />;
}
