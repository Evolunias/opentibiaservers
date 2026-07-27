import AlasteraRealMapServersArgentinaKeywordPage, { generateMetadata } from './alastera-real-map-servers-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRealMapServersArgentinaKeywordPage />;
}
