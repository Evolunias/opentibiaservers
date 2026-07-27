import CustomVenoreotOtKeywordPage, { generateMetadata } from './custom-venoreot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotOtKeywordPage />;
}
