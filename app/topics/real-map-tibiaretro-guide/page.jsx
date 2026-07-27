import RealMapTibiaretroGuideKeywordPage, { generateMetadata } from './real-map-tibiaretro-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroGuideKeywordPage />;
}
