import ArcaniarlForumKeywordPage, { generateMetadata } from './arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlForumKeywordPage />;
}
