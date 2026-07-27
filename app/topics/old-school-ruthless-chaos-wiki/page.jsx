import OldSchoolRuthlessChaosWikiKeywordPage, { generateMetadata } from './old-school-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRuthlessChaosWikiKeywordPage />;
}
