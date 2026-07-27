import NewSeasonThaisotForumKeywordPage, { generateMetadata } from './new-season-thaisot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonThaisotForumKeywordPage />;
}
