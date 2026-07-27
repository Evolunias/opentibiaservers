import RealMapTibiaretroWikiKeywordPage, { generateMetadata } from './real-map-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroWikiKeywordPage />;
}
