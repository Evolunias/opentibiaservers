import HighrateYurotsForumKeywordPage, { generateMetadata } from './highrate-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateYurotsForumKeywordPage />;
}
