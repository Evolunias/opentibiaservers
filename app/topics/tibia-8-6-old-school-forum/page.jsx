import Tibia86OldSchoolForumKeywordPage, { generateMetadata } from './tibia-8-6-old-school-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OldSchoolForumKeywordPage />;
}
