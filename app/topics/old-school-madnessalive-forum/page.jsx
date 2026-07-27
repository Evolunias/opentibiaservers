import OldSchoolMadnessaliveForumKeywordPage, { generateMetadata } from './old-school-madnessalive-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMadnessaliveForumKeywordPage />;
}
