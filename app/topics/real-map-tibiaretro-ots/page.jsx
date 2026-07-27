import RealMapTibiaretroOtsKeywordPage, { generateMetadata } from './real-map-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroOtsKeywordPage />;
}
