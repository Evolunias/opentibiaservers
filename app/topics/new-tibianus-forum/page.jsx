import NewTibianusForumKeywordPage, { generateMetadata } from './new-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusForumKeywordPage />;
}
