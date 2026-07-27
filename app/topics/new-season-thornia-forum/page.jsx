import NewSeasonThorniaForumKeywordPage, { generateMetadata } from './new-season-thornia-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThorniaForumKeywordPage />;
}
