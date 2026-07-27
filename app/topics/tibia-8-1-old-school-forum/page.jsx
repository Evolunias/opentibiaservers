import Tibia81OldSchoolForumKeywordPage, { generateMetadata } from './tibia-8-1-old-school-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81OldSchoolForumKeywordPage />;
}
