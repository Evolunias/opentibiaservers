import NtoStarRealMapServerFranceKeywordPage, { generateMetadata } from './nto-star-real-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarRealMapServerFranceKeywordPage />;
}
