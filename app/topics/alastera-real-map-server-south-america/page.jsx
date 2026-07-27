import AlasteraRealMapServerSouthAmericaKeywordPage, { generateMetadata } from './alastera-real-map-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRealMapServerSouthAmericaKeywordPage />;
}
