import PvpForumEuropeKeywordPage, { generateMetadata } from './pvp-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpForumEuropeKeywordPage />;
}
