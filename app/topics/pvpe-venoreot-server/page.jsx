import PvpeVenoreotServerKeywordPage, { generateMetadata } from './pvpe-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeVenoreotServerKeywordPage />;
}
