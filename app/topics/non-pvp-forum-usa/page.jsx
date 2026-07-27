import NonPvpForumUsaKeywordPage, { generateMetadata } from './non-pvp-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumUsaKeywordPage />;
}
