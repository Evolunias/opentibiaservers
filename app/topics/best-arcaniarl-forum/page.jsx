import BestArcaniarlForumKeywordPage, { generateMetadata } from './best-arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestArcaniarlForumKeywordPage />;
}
