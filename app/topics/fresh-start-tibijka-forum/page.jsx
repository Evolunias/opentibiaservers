import FreshStartTibijkaForumKeywordPage, { generateMetadata } from './fresh-start-tibijka-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaForumKeywordPage />;
}
