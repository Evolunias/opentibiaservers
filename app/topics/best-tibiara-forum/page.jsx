import BestTibiaraForumKeywordPage, { generateMetadata } from './best-tibiara-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraForumKeywordPage />;
}
