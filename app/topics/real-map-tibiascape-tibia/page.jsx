import RealMapTibiascapeTibiaKeywordPage, { generateMetadata } from './real-map-tibiascape-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeTibiaKeywordPage />;
}
