import OldSchoolImperianicForumKeywordPage, { generateMetadata } from './old-school-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicForumKeywordPage />;
}
