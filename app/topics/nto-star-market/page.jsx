import NtoStarMarketKeywordPage, { generateMetadata } from './nto-star-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarMarketKeywordPage />;
}
