import RealMapTibiantisClientKeywordPage, { generateMetadata } from './real-map-tibiantis-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiantisClientKeywordPage />;
}
