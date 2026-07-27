import NewSeasonArcaniarlForumKeywordPage, { generateMetadata } from './new-season-arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonArcaniarlForumKeywordPage />;
}
