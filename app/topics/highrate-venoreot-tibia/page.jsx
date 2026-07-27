import HighrateVenoreotTibiaKeywordPage, { generateMetadata } from './highrate-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotTibiaKeywordPage />;
}
