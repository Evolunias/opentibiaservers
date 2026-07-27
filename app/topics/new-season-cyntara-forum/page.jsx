import NewSeasonCyntaraForumKeywordPage, { generateMetadata } from './new-season-cyntara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonCyntaraForumKeywordPage />;
}
