import OldSchoolRuthlessChaosOtsKeywordPage, { generateMetadata } from './old-school-ruthless-chaos-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRuthlessChaosOtsKeywordPage />;
}
