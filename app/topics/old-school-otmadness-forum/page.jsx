import OldSchoolOtmadnessForumKeywordPage, { generateMetadata } from './old-school-otmadness-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtmadnessForumKeywordPage />;
}
