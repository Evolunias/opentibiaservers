import PvpEnforcedForumUsaKeywordPage, { generateMetadata } from './pvp-enforced-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedForumUsaKeywordPage />;
}
