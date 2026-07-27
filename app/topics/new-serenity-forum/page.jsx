import NewSerenityForumKeywordPage, { generateMetadata } from './new-serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityForumKeywordPage />;
}
