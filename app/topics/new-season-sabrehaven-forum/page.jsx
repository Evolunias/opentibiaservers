import NewSeasonSabrehavenForumKeywordPage, { generateMetadata } from './new-season-sabrehaven-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonSabrehavenForumKeywordPage />;
}
