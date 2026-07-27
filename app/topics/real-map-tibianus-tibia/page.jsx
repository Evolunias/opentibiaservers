import RealMapTibianusTibiaKeywordPage, { generateMetadata } from './real-map-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibianusTibiaKeywordPage />;
}
