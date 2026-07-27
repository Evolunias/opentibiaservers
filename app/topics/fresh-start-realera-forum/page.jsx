import FreshStartRealeraForumKeywordPage, { generateMetadata } from './fresh-start-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartRealeraForumKeywordPage />;
}
