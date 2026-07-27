import TopShadowcoresForumKeywordPage, { generateMetadata } from './top-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresForumKeywordPage />;
}
