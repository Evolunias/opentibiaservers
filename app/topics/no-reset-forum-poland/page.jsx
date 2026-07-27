import NoResetForumPolandKeywordPage, { generateMetadata } from './no-reset-forum-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetForumPolandKeywordPage />;
}
