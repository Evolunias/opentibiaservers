import FreshStartArcaniarlForumKeywordPage, { generateMetadata } from './fresh-start-arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlForumKeywordPage />;
}
