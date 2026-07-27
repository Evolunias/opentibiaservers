import NewSeasonSerenityForumKeywordPage, { generateMetadata } from './new-season-serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSerenityForumKeywordPage />;
}
