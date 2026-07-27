import NepreniaShopKeywordPage, { generateMetadata } from './neprenia-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaShopKeywordPage />;
}
