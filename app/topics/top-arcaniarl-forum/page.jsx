import TopArcaniarlForumKeywordPage, { generateMetadata } from './top-arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlForumKeywordPage />;
}
