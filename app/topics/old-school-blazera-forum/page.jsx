import OldSchoolBlazeraForumKeywordPage, { generateMetadata } from './old-school-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraForumKeywordPage />;
}
