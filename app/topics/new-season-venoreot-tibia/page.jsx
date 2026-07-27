import NewSeasonVenoreotTibiaKeywordPage, { generateMetadata } from './new-season-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotTibiaKeywordPage />;
}
