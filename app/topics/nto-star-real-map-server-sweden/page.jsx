import NtoStarRealMapServerSwedenKeywordPage, { generateMetadata } from './nto-star-real-map-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRealMapServerSwedenKeywordPage />;
}
