import CurrentVenoreotOtsKeywordPage, { generateMetadata } from './current-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotOtsKeywordPage />;
}
