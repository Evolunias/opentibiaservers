import KasteriaRealMapServerUsaKeywordPage, { generateMetadata } from './kasteria-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRealMapServerUsaKeywordPage />;
}
