import RangerSArcaniMarketKeywordPage, { generateMetadata } from './ranger-s-arcani-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RangerSArcaniMarketKeywordPage />;
}
