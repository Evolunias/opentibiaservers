import OfficialRangerSArcaniGuideKeywordPage, { generateMetadata } from './official-ranger-s-arcani-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRangerSArcaniGuideKeywordPage />;
}
