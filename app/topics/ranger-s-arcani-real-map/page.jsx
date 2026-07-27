import RangerSArcaniRealMapKeywordPage, { generateMetadata } from './ranger-s-arcani-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniRealMapKeywordPage />;
}
