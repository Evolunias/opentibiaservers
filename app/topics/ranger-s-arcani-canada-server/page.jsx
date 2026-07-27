import RangerSArcaniCanadaServerKeywordPage, { generateMetadata } from './ranger-s-arcani-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniCanadaServerKeywordPage />;
}
