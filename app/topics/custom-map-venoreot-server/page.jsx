import CustomMapVenoreotServerKeywordPage, { generateMetadata } from './custom-map-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapVenoreotServerKeywordPage />;
}
