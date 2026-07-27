import OldSchoolRuthlessChaosWebsiteKeywordPage, { generateMetadata } from './old-school-ruthless-chaos-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRuthlessChaosWebsiteKeywordPage />;
}
