import HighrateDuraOnlineForumKeywordPage, { generateMetadata } from './highrate-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateDuraOnlineForumKeywordPage />;
}
