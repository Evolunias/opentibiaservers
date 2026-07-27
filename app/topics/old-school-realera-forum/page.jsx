import OldSchoolRealeraForumKeywordPage, { generateMetadata } from './old-school-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraForumKeywordPage />;
}
