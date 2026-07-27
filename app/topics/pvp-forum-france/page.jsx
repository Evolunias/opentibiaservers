import PvpForumFranceKeywordPage, { generateMetadata } from './pvp-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpForumFranceKeywordPage />;
}
