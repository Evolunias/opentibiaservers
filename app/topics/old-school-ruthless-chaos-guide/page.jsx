import OldSchoolRuthlessChaosGuideKeywordPage, { generateMetadata } from './old-school-ruthless-chaos-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRuthlessChaosGuideKeywordPage />;
}
