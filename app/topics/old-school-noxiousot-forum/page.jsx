import OldSchoolNoxiousotForumKeywordPage, { generateMetadata } from './old-school-noxiousot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNoxiousotForumKeywordPage />;
}
