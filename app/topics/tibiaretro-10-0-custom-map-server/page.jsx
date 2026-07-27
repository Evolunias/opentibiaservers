import Tibiaretro100CustomMapServerKeywordPage, { generateMetadata } from './tibiaretro-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro100CustomMapServerKeywordPage />;
}
