import NewSeasonImperianicForumKeywordPage, { generateMetadata } from './new-season-imperianic-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonImperianicForumKeywordPage />;
}
