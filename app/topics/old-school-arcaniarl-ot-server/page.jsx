import OldSchoolArcaniarlOtServerKeywordPage, { generateMetadata } from './old-school-arcaniarl-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlOtServerKeywordPage />;
}
