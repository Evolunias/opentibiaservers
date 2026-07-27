import Tibia15OldSchoolForumKeywordPage, { generateMetadata } from './tibia-15-old-school-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolForumKeywordPage />;
}
