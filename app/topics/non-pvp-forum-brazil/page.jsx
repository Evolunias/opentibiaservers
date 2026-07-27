import NonPvpForumBrazilKeywordPage, { generateMetadata } from './non-pvp-forum-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumBrazilKeywordPage />;
}
