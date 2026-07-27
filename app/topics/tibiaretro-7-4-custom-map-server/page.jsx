import Tibiaretro74CustomMapServerKeywordPage, { generateMetadata } from './tibiaretro-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro74CustomMapServerKeywordPage />;
}
