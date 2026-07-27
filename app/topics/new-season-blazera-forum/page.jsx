import NewSeasonBlazeraForumKeywordPage, { generateMetadata } from './new-season-blazera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonBlazeraForumKeywordPage />;
}
