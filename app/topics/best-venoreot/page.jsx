import BestVenoreotKeywordPage, { generateMetadata } from './best-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotKeywordPage />;
}
