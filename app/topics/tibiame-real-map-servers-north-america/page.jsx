import TibiameRealMapServersNorthAmericaKeywordPage, { generateMetadata } from './tibiame-real-map-servers-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameRealMapServersNorthAmericaKeywordPage />;
}
