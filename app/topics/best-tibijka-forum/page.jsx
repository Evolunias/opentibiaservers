import BestTibijkaForumKeywordPage, { generateMetadata } from './best-tibijka-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaForumKeywordPage />;
}
