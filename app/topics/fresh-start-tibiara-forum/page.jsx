import FreshStartTibiaraForumKeywordPage, { generateMetadata } from './fresh-start-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraForumKeywordPage />;
}
