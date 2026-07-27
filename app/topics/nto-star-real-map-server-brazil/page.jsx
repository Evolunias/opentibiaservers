import NtoStarRealMapServerBrazilKeywordPage, { generateMetadata } from './nto-star-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRealMapServerBrazilKeywordPage />;
}
