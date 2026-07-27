import OldSchoolRuthlessChaosOtKeywordPage, { generateMetadata } from './old-school-ruthless-chaos-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRuthlessChaosOtKeywordPage />;
}
