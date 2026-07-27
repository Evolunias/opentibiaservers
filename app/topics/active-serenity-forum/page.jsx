import ActiveSerenityForumKeywordPage, { generateMetadata } from './active-serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSerenityForumKeywordPage />;
}
