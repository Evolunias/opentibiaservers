import NonPvpForumGermanyKeywordPage, { generateMetadata } from './non-pvp-forum-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumGermanyKeywordPage />;
}
