import NewOxygenotForumKeywordPage, { generateMetadata } from './new-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotForumKeywordPage />;
}
