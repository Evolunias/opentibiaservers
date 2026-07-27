import AlasteraRealMapServerArgentinaKeywordPage, { generateMetadata } from './alastera-real-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRealMapServerArgentinaKeywordPage />;
}
