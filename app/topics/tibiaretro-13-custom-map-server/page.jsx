import Tibiaretro13CustomMapServerKeywordPage, { generateMetadata } from './tibiaretro-13-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro13CustomMapServerKeywordPage />;
}
