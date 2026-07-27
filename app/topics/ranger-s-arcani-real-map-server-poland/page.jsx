import RangerSArcaniRealMapServerPolandKeywordPage, { generateMetadata } from './ranger-s-arcani-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRealMapServerPolandKeywordPage />;
}
