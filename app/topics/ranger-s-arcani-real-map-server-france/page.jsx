import RangerSArcaniRealMapServerFranceKeywordPage, { generateMetadata } from './ranger-s-arcani-real-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRealMapServerFranceKeywordPage />;
}
