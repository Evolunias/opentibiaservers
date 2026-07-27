import NonPvpForumSwedenKeywordPage, { generateMetadata } from './non-pvp-forum-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumSwedenKeywordPage />;
}
