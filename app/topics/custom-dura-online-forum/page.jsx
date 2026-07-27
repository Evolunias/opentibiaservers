import CustomDuraOnlineForumKeywordPage, { generateMetadata } from './custom-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomDuraOnlineForumKeywordPage />;
}
