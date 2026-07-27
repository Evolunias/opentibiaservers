import NewTibijkaForumKeywordPage, { generateMetadata } from './new-tibijka-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibijkaForumKeywordPage />;
}
