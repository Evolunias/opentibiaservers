import RealMapTibiascapeOtKeywordPage, { generateMetadata } from './real-map-tibiascape-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeOtKeywordPage />;
}
