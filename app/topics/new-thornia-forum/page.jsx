import NewThorniaForumKeywordPage, { generateMetadata } from './new-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThorniaForumKeywordPage />;
}
