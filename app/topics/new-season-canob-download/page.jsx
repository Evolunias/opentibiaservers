import NewSeasonCanobDownloadKeywordPage, { generateMetadata } from './new-season-canob-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCanobDownloadKeywordPage />;
}
