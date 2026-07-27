import Tibiaretro12RealMapServersKeywordPage, { generateMetadata } from './tibiaretro-12-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro12RealMapServersKeywordPage />;
}
