import OldSchoolSabrehavenForumKeywordPage, { generateMetadata } from './old-school-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenForumKeywordPage />;
}
