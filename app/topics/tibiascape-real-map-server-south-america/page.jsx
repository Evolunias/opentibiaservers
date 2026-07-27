import TibiascapeRealMapServerSouthAmericaKeywordPage, { generateMetadata } from './tibiascape-real-map-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeRealMapServerSouthAmericaKeywordPage />;
}
