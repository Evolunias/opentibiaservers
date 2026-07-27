import NonPvpForumArgentinaKeywordPage, { generateMetadata } from './non-pvp-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumArgentinaKeywordPage />;
}
