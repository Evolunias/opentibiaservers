import OldSchoolTibiameForumKeywordPage, { generateMetadata } from './old-school-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameForumKeywordPage />;
}
