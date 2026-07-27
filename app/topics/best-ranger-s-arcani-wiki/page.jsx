import BestRangerSArcaniWikiKeywordPage, { generateMetadata } from './best-ranger-s-arcani-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRangerSArcaniWikiKeywordPage />;
}
