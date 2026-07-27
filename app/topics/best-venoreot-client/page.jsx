import BestVenoreotClientKeywordPage, { generateMetadata } from './best-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotClientKeywordPage />;
}
