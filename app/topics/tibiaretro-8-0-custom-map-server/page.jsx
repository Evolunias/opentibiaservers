import Tibiaretro80CustomMapServerKeywordPage, { generateMetadata } from './tibiaretro-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro80CustomMapServerKeywordPage />;
}
