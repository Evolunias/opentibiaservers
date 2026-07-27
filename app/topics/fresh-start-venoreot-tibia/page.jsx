import FreshStartVenoreotTibiaKeywordPage, { generateMetadata } from './fresh-start-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotTibiaKeywordPage />;
}
