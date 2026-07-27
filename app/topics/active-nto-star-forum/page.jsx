import ActiveNtoStarForumKeywordPage, { generateMetadata } from './active-nto-star-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNtoStarForumKeywordPage />;
}
