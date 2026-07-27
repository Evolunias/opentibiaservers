import AlasteraRealMapServerCanadaKeywordPage, { generateMetadata } from './alastera-real-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRealMapServerCanadaKeywordPage />;
}
