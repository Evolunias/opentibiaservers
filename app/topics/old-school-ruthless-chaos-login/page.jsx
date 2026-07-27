import OldSchoolRuthlessChaosLoginKeywordPage, { generateMetadata } from './old-school-ruthless-chaos-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRuthlessChaosLoginKeywordPage />;
}
