import FreshStartVenoreotKeywordPage, { generateMetadata } from './fresh-start-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotKeywordPage />;
}
