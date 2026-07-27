import AlasteraShopKeywordPage, { generateMetadata } from './alastera-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraShopKeywordPage />;
}
