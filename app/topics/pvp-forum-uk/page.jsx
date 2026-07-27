import PvpForumUkKeywordPage, { generateMetadata } from './pvp-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpForumUkKeywordPage />;
}
