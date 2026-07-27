import OldSchoolArcaniarlOtKeywordPage, { generateMetadata } from './old-school-arcaniarl-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlOtKeywordPage />;
}
