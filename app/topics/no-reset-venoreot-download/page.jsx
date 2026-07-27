import NoResetVenoreotDownloadKeywordPage, { generateMetadata } from './no-reset-venoreot-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotDownloadKeywordPage />;
}
