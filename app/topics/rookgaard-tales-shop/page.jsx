import RookgaardTalesShopKeywordPage, { generateMetadata } from './rookgaard-tales-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RookgaardTalesShopKeywordPage />;
}
