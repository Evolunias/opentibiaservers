import SerenityForumKeywordPage, { generateMetadata } from './serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityForumKeywordPage />;
}
