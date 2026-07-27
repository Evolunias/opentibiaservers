import Tibiaretro11CustomMapServerKeywordPage, { generateMetadata } from './tibiaretro-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro11CustomMapServerKeywordPage />;
}
