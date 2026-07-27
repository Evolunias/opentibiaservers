import OldSchoolArcaniarlForumKeywordPage, { generateMetadata } from './old-school-arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArcaniarlForumKeywordPage />;
}
