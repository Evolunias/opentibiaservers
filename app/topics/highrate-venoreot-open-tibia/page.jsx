import HighrateVenoreotOpenTibiaKeywordPage, { generateMetadata } from './highrate-venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateVenoreotOpenTibiaKeywordPage />;
}
