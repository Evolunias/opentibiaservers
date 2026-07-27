import OfficialRangerSArcaniOtKeywordPage, { generateMetadata } from './official-ranger-s-arcani-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRangerSArcaniOtKeywordPage />;
}
