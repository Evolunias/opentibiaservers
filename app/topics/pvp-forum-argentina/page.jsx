import PvpForumArgentinaKeywordPage, { generateMetadata } from './pvp-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpForumArgentinaKeywordPage />;
}
