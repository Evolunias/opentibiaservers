import NewSeasonTibiascapeForumKeywordPage, { generateMetadata } from './new-season-tibiascape-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiascapeForumKeywordPage />;
}
