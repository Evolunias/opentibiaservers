import NoResetVenoreotClientKeywordPage, { generateMetadata } from './no-reset-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotClientKeywordPage />;
}
