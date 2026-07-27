import NewSeasonClassicusForumKeywordPage, { generateMetadata } from './new-season-classicus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonClassicusForumKeywordPage />;
}
