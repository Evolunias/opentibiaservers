import ActiveVenoreotDownloadKeywordPage, { generateMetadata } from './active-venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotDownloadKeywordPage />;
}
