import NewSeasonTibiaraForumKeywordPage, { generateMetadata } from './new-season-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibiaraForumKeywordPage />;
}
