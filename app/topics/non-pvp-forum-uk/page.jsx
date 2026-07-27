import NonPvpForumUkKeywordPage, { generateMetadata } from './non-pvp-forum-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumUkKeywordPage />;
}
