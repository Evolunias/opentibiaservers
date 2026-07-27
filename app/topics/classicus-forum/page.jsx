import ClassicusForumKeywordPage, { generateMetadata } from './classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusForumKeywordPage />;
}
