import OfficialRangerSArcaniOtsKeywordPage, { generateMetadata } from './official-ranger-s-arcani-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRangerSArcaniOtsKeywordPage />;
}
