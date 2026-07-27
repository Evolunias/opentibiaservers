import NoResetSerenityForumKeywordPage, { generateMetadata } from './no-reset-serenity-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityForumKeywordPage />;
}
