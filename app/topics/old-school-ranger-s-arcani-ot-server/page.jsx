import OldSchoolRangerSArcaniOtServerKeywordPage, { generateMetadata } from './old-school-ranger-s-arcani-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRangerSArcaniOtServerKeywordPage />;
}
