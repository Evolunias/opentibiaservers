import Tibiaretro76CustomMapServerKeywordPage, { generateMetadata } from './tibiaretro-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaretro76CustomMapServerKeywordPage />;
}
