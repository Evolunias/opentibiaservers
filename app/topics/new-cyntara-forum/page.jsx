import NewCyntaraForumKeywordPage, { generateMetadata } from './new-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraForumKeywordPage />;
}
