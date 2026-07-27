import NonPvpForumNorthAmericaKeywordPage, { generateMetadata } from './non-pvp-forum-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumNorthAmericaKeywordPage />;
}
