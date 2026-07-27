import RangerSArcaniSouthAmericaServerKeywordPage, { generateMetadata } from './ranger-s-arcani-south-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniSouthAmericaServerKeywordPage />;
}
