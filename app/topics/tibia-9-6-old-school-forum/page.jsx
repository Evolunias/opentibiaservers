import Tibia96OldSchoolForumKeywordPage, { generateMetadata } from './tibia-9-6-old-school-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96OldSchoolForumKeywordPage />;
}
