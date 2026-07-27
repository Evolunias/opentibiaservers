import LowrateVenoreotOpenTibiaKeywordPage, { generateMetadata } from './lowrate-venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateVenoreotOpenTibiaKeywordPage />;
}
