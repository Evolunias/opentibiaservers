import PvpForumMexicoKeywordPage, { generateMetadata } from './pvp-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpForumMexicoKeywordPage />;
}
