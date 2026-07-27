import TibiaretroRealMapServerUsaKeywordPage, { generateMetadata } from './tibiaretro-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroRealMapServerUsaKeywordPage />;
}
