import NewSeasonOxygenotForumKeywordPage, { generateMetadata } from './new-season-oxygenot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonOxygenotForumKeywordPage />;
}
