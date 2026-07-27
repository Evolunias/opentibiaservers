import BestVenoreotOtServerKeywordPage, { generateMetadata } from './best-venoreot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotOtServerKeywordPage />;
}
