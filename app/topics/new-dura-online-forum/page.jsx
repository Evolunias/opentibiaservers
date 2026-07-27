import NewDuraOnlineForumKeywordPage, { generateMetadata } from './new-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDuraOnlineForumKeywordPage />;
}
