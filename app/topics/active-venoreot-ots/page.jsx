import ActiveVenoreotOtsKeywordPage, { generateMetadata } from './active-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotOtsKeywordPage />;
}
