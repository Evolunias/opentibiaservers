import RealMapTibiaretroKeywordPage, { generateMetadata } from './real-map-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroKeywordPage />;
}
