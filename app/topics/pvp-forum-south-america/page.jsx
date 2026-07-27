import PvpForumSouthAmericaKeywordPage, { generateMetadata } from './pvp-forum-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpForumSouthAmericaKeywordPage />;
}
