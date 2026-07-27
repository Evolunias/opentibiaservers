import CurrentRangerSArcaniForumKeywordPage, { generateMetadata } from './current-ranger-s-arcani-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRangerSArcaniForumKeywordPage />;
}
