import FreshStartForumFranceKeywordPage, { generateMetadata } from './fresh-start-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumFranceKeywordPage />;
}
