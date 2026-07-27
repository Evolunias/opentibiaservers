import Tibiaretro11RealMapServersKeywordPage, { generateMetadata } from './tibiaretro-11-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11RealMapServersKeywordPage />;
}
