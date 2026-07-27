import RealMapTibiascapeOtsKeywordPage, { generateMetadata } from './real-map-tibiascape-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeOtsKeywordPage />;
}
