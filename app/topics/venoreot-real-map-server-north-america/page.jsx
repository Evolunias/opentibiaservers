import VenoreotRealMapServerNorthAmericaKeywordPage, { generateMetadata } from './venoreot-real-map-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotRealMapServerNorthAmericaKeywordPage />;
}
