import FreshStartVenoreotLoginKeywordPage, { generateMetadata } from './fresh-start-venoreot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotLoginKeywordPage />;
}
