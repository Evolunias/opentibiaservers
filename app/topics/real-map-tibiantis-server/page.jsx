import RealMapTibiantisServerKeywordPage, { generateMetadata } from './real-map-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiantisServerKeywordPage />;
}
