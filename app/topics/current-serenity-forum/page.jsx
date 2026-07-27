import CurrentSerenityForumKeywordPage, { generateMetadata } from './current-serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityForumKeywordPage />;
}
