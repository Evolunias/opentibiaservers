import NoResetRealestaForumKeywordPage, { generateMetadata } from './no-reset-realesta-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealestaForumKeywordPage />;
}
