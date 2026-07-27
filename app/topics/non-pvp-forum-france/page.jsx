import NonPvpForumFranceKeywordPage, { generateMetadata } from './non-pvp-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumFranceKeywordPage />;
}
