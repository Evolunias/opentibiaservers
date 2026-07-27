import NewTibiaraForumKeywordPage, { generateMetadata } from './new-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraForumKeywordPage />;
}
