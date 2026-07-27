import PvpForumLatinAmericaKeywordPage, { generateMetadata } from './pvp-forum-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpForumLatinAmericaKeywordPage />;
}
