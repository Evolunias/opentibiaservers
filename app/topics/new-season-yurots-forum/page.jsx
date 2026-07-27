import NewSeasonYurotsForumKeywordPage, { generateMetadata } from './new-season-yurots-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonYurotsForumKeywordPage />;
}
