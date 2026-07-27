import NewSeasonAmeriaDownloadKeywordPage, { generateMetadata } from './new-season-ameria-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAmeriaDownloadKeywordPage />;
}
