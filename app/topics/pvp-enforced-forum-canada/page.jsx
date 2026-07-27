import PvpEnforcedForumCanadaKeywordPage, { generateMetadata } from './pvp-enforced-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedForumCanadaKeywordPage />;
}
