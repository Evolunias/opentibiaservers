import PopularVenoreotOpenTibiaKeywordPage, { generateMetadata } from './popular-venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotOpenTibiaKeywordPage />;
}
