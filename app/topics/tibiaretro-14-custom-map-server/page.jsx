import Tibiaretro14CustomMapServerKeywordPage, { generateMetadata } from './tibiaretro-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro14CustomMapServerKeywordPage />;
}
