import RealMapTibiaretroWebsiteKeywordPage, { generateMetadata } from './real-map-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroWebsiteKeywordPage />;
}
