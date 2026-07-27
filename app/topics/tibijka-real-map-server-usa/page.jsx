import TibijkaRealMapServerUsaKeywordPage, { generateMetadata } from './tibijka-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaRealMapServerUsaKeywordPage />;
}
