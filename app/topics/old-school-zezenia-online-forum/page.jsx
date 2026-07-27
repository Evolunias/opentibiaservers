import OldSchoolZezeniaOnlineForumKeywordPage, { generateMetadata } from './old-school-zezenia-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZezeniaOnlineForumKeywordPage />;
}
