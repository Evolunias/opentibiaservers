import Kasteria14RealMapServerKeywordPage, { generateMetadata } from './kasteria-14-real-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14RealMapServerKeywordPage />;
}
