import NewSaintsotDownloadKeywordPage, { generateMetadata } from './new-saintsot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotDownloadKeywordPage />;
}
