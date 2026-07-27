import FreshStartForumCanadaKeywordPage, { generateMetadata } from './fresh-start-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartForumCanadaKeywordPage />;
}
