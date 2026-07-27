import NoResetForumEuropeKeywordPage, { generateMetadata } from './no-reset-forum-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetForumEuropeKeywordPage />;
}
