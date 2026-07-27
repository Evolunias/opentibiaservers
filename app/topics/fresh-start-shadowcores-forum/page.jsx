import FreshStartShadowcoresForumKeywordPage, { generateMetadata } from './fresh-start-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartShadowcoresForumKeywordPage />;
}
