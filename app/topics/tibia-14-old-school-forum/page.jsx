import Tibia14OldSchoolForumKeywordPage, { generateMetadata } from './tibia-14-old-school-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14OldSchoolForumKeywordPage />;
}
