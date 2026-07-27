import TopVenoreotTibiaKeywordPage, { generateMetadata } from './top-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotTibiaKeywordPage />;
}
