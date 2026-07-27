import FreshStartNepreniaForumKeywordPage, { generateMetadata } from './fresh-start-neprenia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNepreniaForumKeywordPage />;
}
