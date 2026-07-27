import TibiascapeRealMapServersNorthAmericaKeywordPage, { generateMetadata } from './tibiascape-real-map-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeRealMapServersNorthAmericaKeywordPage />;
}
