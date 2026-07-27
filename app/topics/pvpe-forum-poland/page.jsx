import PvpeForumPolandKeywordPage, { generateMetadata } from './pvpe-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeForumPolandKeywordPage />;
}
