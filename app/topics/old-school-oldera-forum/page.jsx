import OldSchoolOlderaForumKeywordPage, { generateMetadata } from './old-school-oldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOlderaForumKeywordPage />;
}
