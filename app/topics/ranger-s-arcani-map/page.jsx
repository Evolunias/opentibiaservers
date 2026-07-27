import RangerSArcaniMapKeywordPage, { generateMetadata } from './ranger-s-arcani-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniMapKeywordPage />;
}
