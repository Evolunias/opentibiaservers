import Tibia12OldSchoolForumKeywordPage, { generateMetadata } from './tibia-12-old-school-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolForumKeywordPage />;
}
