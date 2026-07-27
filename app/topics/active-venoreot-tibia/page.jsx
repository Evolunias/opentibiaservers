import ActiveVenoreotTibiaKeywordPage, { generateMetadata } from './active-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotTibiaKeywordPage />;
}
