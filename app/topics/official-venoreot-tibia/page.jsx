import OfficialVenoreotTibiaKeywordPage, { generateMetadata } from './official-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotTibiaKeywordPage />;
}
