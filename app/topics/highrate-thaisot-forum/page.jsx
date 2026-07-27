import HighrateThaisotForumKeywordPage, { generateMetadata } from './highrate-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotForumKeywordPage />;
}
