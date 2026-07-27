import OldSchoolRubinotForumKeywordPage, { generateMetadata } from './old-school-rubinot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotForumKeywordPage />;
}
