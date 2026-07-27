import CurrentArchlightForumKeywordPage, { generateMetadata } from './current-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightForumKeywordPage />;
}
