import RealMapTibiaretroClientKeywordPage, { generateMetadata } from './real-map-tibiaretro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroClientKeywordPage />;
}
