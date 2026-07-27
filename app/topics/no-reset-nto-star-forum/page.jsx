import NoResetNtoStarForumKeywordPage, { generateMetadata } from './no-reset-nto-star-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNtoStarForumKeywordPage />;
}
