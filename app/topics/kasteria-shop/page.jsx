import KasteriaShopKeywordPage, { generateMetadata } from './kasteria-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaShopKeywordPage />;
}
