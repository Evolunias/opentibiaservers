import TopDuraOnlineForumKeywordPage, { generateMetadata } from './top-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDuraOnlineForumKeywordPage />;
}
