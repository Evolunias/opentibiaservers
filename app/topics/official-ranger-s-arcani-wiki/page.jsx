import OfficialRangerSArcaniWikiKeywordPage, { generateMetadata } from './official-ranger-s-arcani-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRangerSArcaniWikiKeywordPage />;
}
