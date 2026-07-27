import NewSeasonEvoleraDownloadKeywordPage, { generateMetadata } from './new-season-evolera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonEvoleraDownloadKeywordPage />;
}
