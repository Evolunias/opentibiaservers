import CustomVenoreotOtServerKeywordPage, { generateMetadata } from './custom-venoreot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotOtServerKeywordPage />;
}
