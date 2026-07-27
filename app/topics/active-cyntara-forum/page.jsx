import ActiveCyntaraForumKeywordPage, { generateMetadata } from './active-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCyntaraForumKeywordPage />;
}
