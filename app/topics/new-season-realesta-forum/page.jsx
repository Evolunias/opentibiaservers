import NewSeasonRealestaForumKeywordPage, { generateMetadata } from './new-season-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealestaForumKeywordPage />;
}
