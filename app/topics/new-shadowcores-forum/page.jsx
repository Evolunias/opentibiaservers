import NewShadowcoresForumKeywordPage, { generateMetadata } from './new-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresForumKeywordPage />;
}
