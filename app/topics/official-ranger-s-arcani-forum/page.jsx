import OfficialRangerSArcaniForumKeywordPage, { generateMetadata } from './official-ranger-s-arcani-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRangerSArcaniForumKeywordPage />;
}
