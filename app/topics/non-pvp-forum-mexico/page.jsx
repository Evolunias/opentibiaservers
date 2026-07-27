import NonPvpForumMexicoKeywordPage, { generateMetadata } from './non-pvp-forum-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumMexicoKeywordPage />;
}
