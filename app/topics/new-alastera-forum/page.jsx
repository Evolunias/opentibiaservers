import NewAlasteraForumKeywordPage, { generateMetadata } from './new-alastera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraForumKeywordPage />;
}
