import NewSeasonTibijkaForumKeywordPage, { generateMetadata } from './new-season-tibijka-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTibijkaForumKeywordPage />;
}
