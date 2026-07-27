import Tibiaretro71CustomMapServerKeywordPage, { generateMetadata } from './tibiaretro-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro71CustomMapServerKeywordPage />;
}
