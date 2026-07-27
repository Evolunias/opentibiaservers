import CustomVenoreotOtsKeywordPage, { generateMetadata } from './custom-venoreot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotOtsKeywordPage />;
}
