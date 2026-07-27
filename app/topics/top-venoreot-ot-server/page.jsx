import TopVenoreotOtServerKeywordPage, { generateMetadata } from './top-venoreot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotOtServerKeywordPage />;
}
