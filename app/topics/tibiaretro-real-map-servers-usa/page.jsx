import TibiaretroRealMapServersUsaKeywordPage, { generateMetadata } from './tibiaretro-real-map-servers-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroRealMapServersUsaKeywordPage />;
}
