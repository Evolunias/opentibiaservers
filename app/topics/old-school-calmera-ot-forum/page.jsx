import OldSchoolCalmeraOtForumKeywordPage, { generateMetadata } from './old-school-calmera-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCalmeraOtForumKeywordPage />;
}
