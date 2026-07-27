import OfficialVenoreotOtsKeywordPage, { generateMetadata } from './official-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotOtsKeywordPage />;
}
