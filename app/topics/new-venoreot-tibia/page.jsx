import NewVenoreotTibiaKeywordPage, { generateMetadata } from './new-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotTibiaKeywordPage />;
}
