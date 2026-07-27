import OldSchoolSerenityForumKeywordPage, { generateMetadata } from './old-school-serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityForumKeywordPage />;
}
