import NonPvpForumCanadaKeywordPage, { generateMetadata } from './non-pvp-forum-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpForumCanadaKeywordPage />;
}
