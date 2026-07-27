import ArcaniarlShopKeywordPage, { generateMetadata } from './arcaniarl-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlShopKeywordPage />;
}
