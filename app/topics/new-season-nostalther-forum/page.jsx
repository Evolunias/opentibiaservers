import NewSeasonNostaltherForumKeywordPage, { generateMetadata } from './new-season-nostalther-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherForumKeywordPage />;
}
