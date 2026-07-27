import NonPvpVenoreotServerKeywordPage, { generateMetadata } from './non-pvp-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpVenoreotServerKeywordPage />;
}
