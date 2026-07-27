import OldSchoolNostaltherForumKeywordPage, { generateMetadata } from './old-school-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNostaltherForumKeywordPage />;
}
