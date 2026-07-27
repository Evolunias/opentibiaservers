import NewSeasonMarolaotForumKeywordPage, { generateMetadata } from './new-season-marolaot-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonMarolaotForumKeywordPage />;
}
