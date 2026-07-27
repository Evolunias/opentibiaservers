import Tibiaretro13RealMapServersKeywordPage, { generateMetadata } from './tibiaretro-13-real-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13RealMapServersKeywordPage />;
}
