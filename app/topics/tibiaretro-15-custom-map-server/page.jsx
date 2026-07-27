import Tibiaretro15CustomMapServerKeywordPage, { generateMetadata } from './tibiaretro-15-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro15CustomMapServerKeywordPage />;
}
