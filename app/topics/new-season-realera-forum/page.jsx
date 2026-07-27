import NewSeasonRealeraForumKeywordPage, { generateMetadata } from './new-season-realera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRealeraForumKeywordPage />;
}
