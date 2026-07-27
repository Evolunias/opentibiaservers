import NtoStarRealMapServerPolandKeywordPage, { generateMetadata } from './nto-star-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRealMapServerPolandKeywordPage />;
}
