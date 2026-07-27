import LowrateRangerSArcaniClientKeywordPage, { generateMetadata } from './lowrate-ranger-s-arcani-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRangerSArcaniClientKeywordPage />;
}
