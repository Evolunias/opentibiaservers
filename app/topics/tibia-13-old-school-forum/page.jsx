import Tibia13OldSchoolForumKeywordPage, { generateMetadata } from './tibia-13-old-school-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolForumKeywordPage />;
}
