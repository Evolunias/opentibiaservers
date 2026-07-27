import CustomRangerSArcaniForumKeywordPage, { generateMetadata } from './custom-ranger-s-arcani-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRangerSArcaniForumKeywordPage />;
}
