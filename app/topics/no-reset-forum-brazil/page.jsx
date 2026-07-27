import NoResetForumBrazilKeywordPage, { generateMetadata } from './no-reset-forum-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetForumBrazilKeywordPage />;
}
