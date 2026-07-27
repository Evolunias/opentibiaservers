import BestShadowcoresForumKeywordPage, { generateMetadata } from './best-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresForumKeywordPage />;
}
