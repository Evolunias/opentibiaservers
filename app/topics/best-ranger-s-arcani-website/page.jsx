import BestRangerSArcaniWebsiteKeywordPage, { generateMetadata } from './best-ranger-s-arcani-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRangerSArcaniWebsiteKeywordPage />;
}
