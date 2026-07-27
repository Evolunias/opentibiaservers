import TibiaretroRealMapServerEuropeKeywordPage, { generateMetadata } from './tibiaretro-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroRealMapServerEuropeKeywordPage />;
}
