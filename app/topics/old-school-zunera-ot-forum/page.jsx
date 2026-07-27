import OldSchoolZuneraOtForumKeywordPage, { generateMetadata } from './old-school-zunera-ot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZuneraOtForumKeywordPage />;
}
