import PopularVenoreotDownloadKeywordPage, { generateMetadata } from './popular-venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotDownloadKeywordPage />;
}
