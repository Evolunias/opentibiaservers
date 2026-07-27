import OfficialVenoreotDownloadKeywordPage, { generateMetadata } from './official-venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotDownloadKeywordPage />;
}
