import NoResetForumUsaKeywordPage, { generateMetadata } from './no-reset-forum-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetForumUsaKeywordPage />;
}
