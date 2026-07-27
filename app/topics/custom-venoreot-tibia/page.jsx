import CustomVenoreotTibiaKeywordPage, { generateMetadata } from './custom-venoreot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotTibiaKeywordPage />;
}
