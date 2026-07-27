import OldSchoolRangerSArcaniOtKeywordPage, { generateMetadata } from './old-school-ranger-s-arcani-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRangerSArcaniOtKeywordPage />;
}
