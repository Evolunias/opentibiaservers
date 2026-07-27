import CurrentVenoreotDownloadKeywordPage, { generateMetadata } from './current-venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotDownloadKeywordPage />;
}
