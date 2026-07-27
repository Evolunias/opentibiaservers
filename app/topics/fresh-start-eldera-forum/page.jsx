import FreshStartElderaForumKeywordPage, { generateMetadata } from './fresh-start-eldera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartElderaForumKeywordPage />;
}
