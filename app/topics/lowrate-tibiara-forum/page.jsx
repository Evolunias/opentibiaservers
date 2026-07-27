import LowrateTibiaraForumKeywordPage, { generateMetadata } from './lowrate-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraForumKeywordPage />;
}
