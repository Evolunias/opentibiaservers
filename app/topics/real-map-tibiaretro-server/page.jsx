import RealMapTibiaretroServerKeywordPage, { generateMetadata } from './real-map-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroServerKeywordPage />;
}
