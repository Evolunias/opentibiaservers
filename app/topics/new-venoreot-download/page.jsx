import NewVenoreotDownloadKeywordPage, { generateMetadata } from './new-venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotDownloadKeywordPage />;
}
