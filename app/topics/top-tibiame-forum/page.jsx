import TopTibiameForumKeywordPage, { generateMetadata } from './top-tibiame-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameForumKeywordPage />;
}
