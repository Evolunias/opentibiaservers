import TopNilotForumKeywordPage, { generateMetadata } from './top-nilot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotForumKeywordPage />;
}
