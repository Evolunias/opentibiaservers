import CustomVenoreotOpenTibiaKeywordPage, { generateMetadata } from './custom-venoreot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotOpenTibiaKeywordPage />;
}
