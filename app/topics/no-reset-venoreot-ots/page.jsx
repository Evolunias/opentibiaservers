import NoResetVenoreotOtsKeywordPage, { generateMetadata } from './no-reset-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetVenoreotOtsKeywordPage />;
}
