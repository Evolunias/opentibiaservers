import NtoStarRealMapServerUsaKeywordPage, { generateMetadata } from './nto-star-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRealMapServerUsaKeywordPage />;
}
