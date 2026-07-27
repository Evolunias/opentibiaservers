import RealMapTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './real-map-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeOpenTibiaKeywordPage />;
}
