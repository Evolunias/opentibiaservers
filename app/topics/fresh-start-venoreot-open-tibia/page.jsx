import FreshStartVenoreotOpenTibiaKeywordPage, { generateMetadata } from './fresh-start-venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotOpenTibiaKeywordPage />;
}
