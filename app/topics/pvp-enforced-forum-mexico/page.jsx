import PvpEnforcedForumMexicoKeywordPage, { generateMetadata } from './pvp-enforced-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedForumMexicoKeywordPage />;
}
