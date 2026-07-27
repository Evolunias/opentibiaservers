import TopYurotsForumKeywordPage, { generateMetadata } from './top-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopYurotsForumKeywordPage />;
}
