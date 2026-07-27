import NewTibiascapeForumKeywordPage, { generateMetadata } from './new-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiascapeForumKeywordPage />;
}
