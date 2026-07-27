import CustomArchlightForumKeywordPage, { generateMetadata } from './custom-archlight-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomArchlightForumKeywordPage />;
}
