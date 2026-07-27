import TibiascapeShopKeywordPage, { generateMetadata } from './tibiascape-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeShopKeywordPage />;
}
