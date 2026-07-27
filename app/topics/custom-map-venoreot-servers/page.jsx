import CustomMapVenoreotServersKeywordPage, { generateMetadata } from './custom-map-venoreot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapVenoreotServersKeywordPage />;
}
