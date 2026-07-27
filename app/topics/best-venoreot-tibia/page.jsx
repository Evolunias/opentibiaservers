import BestVenoreotTibiaKeywordPage, { generateMetadata } from './best-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestVenoreotTibiaKeywordPage />;
}
