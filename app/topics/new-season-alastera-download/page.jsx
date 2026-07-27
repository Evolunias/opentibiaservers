import NewSeasonAlasteraDownloadKeywordPage, { generateMetadata } from './new-season-alastera-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraDownloadKeywordPage />;
}
