import OldSchoolRangerSArcaniServerKeywordPage, { generateMetadata } from './old-school-ranger-s-arcani-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRangerSArcaniServerKeywordPage />;
}
