import NewRangerSArcaniGuideKeywordPage, { generateMetadata } from './new-ranger-s-arcani-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRangerSArcaniGuideKeywordPage />;
}
