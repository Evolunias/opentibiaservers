import OldSchoolRuthlessChaosServerKeywordPage, { generateMetadata } from './old-school-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRuthlessChaosServerKeywordPage />;
}
