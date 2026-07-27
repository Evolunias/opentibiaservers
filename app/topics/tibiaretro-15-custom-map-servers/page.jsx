import Tibiaretro15CustomMapServersKeywordPage, { generateMetadata } from './tibiaretro-15-custom-map-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15CustomMapServersKeywordPage />;
}
