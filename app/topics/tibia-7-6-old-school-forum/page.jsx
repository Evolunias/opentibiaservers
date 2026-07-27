import Tibia76OldSchoolForumKeywordPage, { generateMetadata } from './tibia-7-6-old-school-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76OldSchoolForumKeywordPage />;
}
