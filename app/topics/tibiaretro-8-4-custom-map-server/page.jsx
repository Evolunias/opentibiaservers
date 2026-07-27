import Tibiaretro84CustomMapServerKeywordPage, { generateMetadata } from './tibiaretro-8-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro84CustomMapServerKeywordPage />;
}
