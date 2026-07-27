import AlasteraRealMapServersSouthAmericaKeywordPage, { generateMetadata } from './alastera-real-map-servers-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraRealMapServersSouthAmericaKeywordPage />;
}
