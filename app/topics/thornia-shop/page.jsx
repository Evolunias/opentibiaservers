import ThorniaShopKeywordPage, { generateMetadata } from './thornia-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaShopKeywordPage />;
}
