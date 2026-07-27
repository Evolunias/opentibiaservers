import NonPvpForumPolandKeywordPage, { generateMetadata } from './non-pvp-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumPolandKeywordPage />;
}
