import NoResetVenoreotWebsiteKeywordPage, { generateMetadata } from './no-reset-venoreot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotWebsiteKeywordPage />;
}
