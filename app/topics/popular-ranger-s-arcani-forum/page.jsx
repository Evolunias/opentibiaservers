import PopularRangerSArcaniForumKeywordPage, { generateMetadata } from './popular-ranger-s-arcani-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRangerSArcaniForumKeywordPage />;
}
