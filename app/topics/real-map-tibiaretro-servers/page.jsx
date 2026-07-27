import RealMapTibiaretroServersKeywordPage, { generateMetadata } from './real-map-tibiaretro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaretroServersKeywordPage />;
}
