import CustomVenoreotDownloadKeywordPage, { generateMetadata } from './custom-venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotDownloadKeywordPage />;
}
