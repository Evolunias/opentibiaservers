import NewSeasonOlderaDownloadKeywordPage, { generateMetadata } from './new-season-oldera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOlderaDownloadKeywordPage />;
}
