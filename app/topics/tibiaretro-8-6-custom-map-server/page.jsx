import Tibiaretro86CustomMapServerKeywordPage, { generateMetadata } from './tibiaretro-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro86CustomMapServerKeywordPage />;
}
