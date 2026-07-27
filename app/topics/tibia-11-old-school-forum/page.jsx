import Tibia11OldSchoolForumKeywordPage, { generateMetadata } from './tibia-11-old-school-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolForumKeywordPage />;
}
