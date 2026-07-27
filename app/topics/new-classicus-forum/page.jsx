import NewClassicusForumKeywordPage, { generateMetadata } from './new-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusForumKeywordPage />;
}
