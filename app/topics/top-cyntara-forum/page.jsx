import TopCyntaraForumKeywordPage, { generateMetadata } from './top-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraForumKeywordPage />;
}
