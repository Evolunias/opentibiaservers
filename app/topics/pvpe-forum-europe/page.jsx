import PvpeForumEuropeKeywordPage, { generateMetadata } from './pvpe-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeForumEuropeKeywordPage />;
}
