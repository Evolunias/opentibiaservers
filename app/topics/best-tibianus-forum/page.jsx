import BestTibianusForumKeywordPage, { generateMetadata } from './best-tibianus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusForumKeywordPage />;
}
