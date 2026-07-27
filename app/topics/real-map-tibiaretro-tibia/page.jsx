import RealMapTibiaretroTibiaKeywordPage, { generateMetadata } from './real-map-tibiaretro-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroTibiaKeywordPage />;
}
