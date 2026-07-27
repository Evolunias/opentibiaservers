import PopularArcaniarlForumKeywordPage, { generateMetadata } from './popular-arcaniarl-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlForumKeywordPage />;
}
