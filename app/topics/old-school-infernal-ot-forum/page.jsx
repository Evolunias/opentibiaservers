import OldSchoolInfernalOtForumKeywordPage, { generateMetadata } from './old-school-infernal-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolInfernalOtForumKeywordPage />;
}
