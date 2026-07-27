import PvpForumCanadaKeywordPage, { generateMetadata } from './pvp-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpForumCanadaKeywordPage />;
}
