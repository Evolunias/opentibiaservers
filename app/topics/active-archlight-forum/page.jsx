import ActiveArchlightForumKeywordPage, { generateMetadata } from './active-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightForumKeywordPage />;
}
