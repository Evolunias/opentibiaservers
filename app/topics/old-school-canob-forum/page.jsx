import OldSchoolCanobForumKeywordPage, { generateMetadata } from './old-school-canob-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCanobForumKeywordPage />;
}
