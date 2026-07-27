import OldSchoolArcaniarlOtsKeywordPage, { generateMetadata } from './old-school-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlOtsKeywordPage />;
}
