import OldSchoolForumFranceKeywordPage, { generateMetadata } from './old-school-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolForumFranceKeywordPage />;
}
