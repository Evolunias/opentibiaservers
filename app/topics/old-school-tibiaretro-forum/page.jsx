import OldSchoolTibiaretroForumKeywordPage, { generateMetadata } from './old-school-tibiaretro-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroForumKeywordPage />;
}
