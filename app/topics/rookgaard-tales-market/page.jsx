import RookgaardTalesMarketKeywordPage, { generateMetadata } from './rookgaard-tales-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesMarketKeywordPage />;
}
