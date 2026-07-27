import ActiveRangerSArcaniWikiKeywordPage, { generateMetadata } from './active-ranger-s-arcani-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRangerSArcaniWikiKeywordPage />;
}
