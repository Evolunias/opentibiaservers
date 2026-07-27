import NewSeasonKasteriaDownloadKeywordPage, { generateMetadata } from './new-season-kasteria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonKasteriaDownloadKeywordPage />;
}
