import Tibia84OldSchoolForumKeywordPage, { generateMetadata } from './tibia-8-4-old-school-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84OldSchoolForumKeywordPage />;
}
