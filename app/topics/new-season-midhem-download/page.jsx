import NewSeasonMidhemDownloadKeywordPage, { generateMetadata } from './new-season-midhem-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMidhemDownloadKeywordPage />;
}
