import OldSchoolRuthlessChaosForumKeywordPage, { generateMetadata } from './old-school-ruthless-chaos-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRuthlessChaosForumKeywordPage />;
}
