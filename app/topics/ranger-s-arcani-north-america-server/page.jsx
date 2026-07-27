import RangerSArcaniNorthAmericaServerKeywordPage, { generateMetadata } from './ranger-s-arcani-north-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniNorthAmericaServerKeywordPage />;
}
