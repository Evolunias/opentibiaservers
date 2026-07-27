import PvpeForumArgentinaKeywordPage, { generateMetadata } from './pvpe-forum-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeForumArgentinaKeywordPage />;
}
