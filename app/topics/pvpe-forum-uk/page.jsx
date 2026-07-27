import PvpeForumUkKeywordPage, { generateMetadata } from './pvpe-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeForumUkKeywordPage />;
}
