import NewSeasonShadowcoresForumKeywordPage, { generateMetadata } from './new-season-shadowcores-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresForumKeywordPage />;
}
