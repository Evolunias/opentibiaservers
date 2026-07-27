import VenoreotShopKeywordPage, { generateMetadata } from './venoreot-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotShopKeywordPage />;
}
