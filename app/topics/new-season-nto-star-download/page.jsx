import NewSeasonNtoStarDownloadKeywordPage, { generateMetadata } from './new-season-nto-star-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNtoStarDownloadKeywordPage />;
}
