import NewSeasonNilotForumKeywordPage, { generateMetadata } from './new-season-nilot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNilotForumKeywordPage />;
}
