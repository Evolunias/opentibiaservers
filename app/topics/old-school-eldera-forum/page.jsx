import OldSchoolElderaForumKeywordPage, { generateMetadata } from './old-school-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaForumKeywordPage />;
}
