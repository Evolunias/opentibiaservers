import LowrateDuraOnlineForumKeywordPage, { generateMetadata } from './lowrate-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateDuraOnlineForumKeywordPage />;
}
