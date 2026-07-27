import HighrateRangerSArcaniForumKeywordPage, { generateMetadata } from './highrate-ranger-s-arcani-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRangerSArcaniForumKeywordPage />;
}
