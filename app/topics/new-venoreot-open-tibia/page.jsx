import NewVenoreotOpenTibiaKeywordPage, { generateMetadata } from './new-venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotOpenTibiaKeywordPage />;
}
