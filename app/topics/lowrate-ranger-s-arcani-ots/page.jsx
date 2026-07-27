import LowrateRangerSArcaniOtsKeywordPage, { generateMetadata } from './lowrate-ranger-s-arcani-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRangerSArcaniOtsKeywordPage />;
}
