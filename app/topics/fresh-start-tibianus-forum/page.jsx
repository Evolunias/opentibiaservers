import FreshStartTibianusForumKeywordPage, { generateMetadata } from './fresh-start-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusForumKeywordPage />;
}
