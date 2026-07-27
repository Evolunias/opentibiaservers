import AmeriaShopKeywordPage, { generateMetadata } from './ameria-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaShopKeywordPage />;
}
