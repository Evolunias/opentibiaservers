import CurrentDuraOnlineForumKeywordPage, { generateMetadata } from './current-dura-online-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDuraOnlineForumKeywordPage />;
}
