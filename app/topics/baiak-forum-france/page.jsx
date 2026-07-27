import BaiakForumFranceKeywordPage, { generateMetadata } from './baiak-forum-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakForumFranceKeywordPage />;
}
