import Tibia71OldSchoolForumKeywordPage, { generateMetadata } from './tibia-7-1-old-school-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71OldSchoolForumKeywordPage />;
}
