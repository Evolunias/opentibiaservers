import HighrateArchlightForumKeywordPage, { generateMetadata } from './highrate-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightForumKeywordPage />;
}
