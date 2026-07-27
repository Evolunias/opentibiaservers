import NewSeasonLumineraForumKeywordPage, { generateMetadata } from './new-season-luminera-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonLumineraForumKeywordPage />;
}
