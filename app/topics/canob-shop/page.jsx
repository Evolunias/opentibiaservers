import CanobShopKeywordPage, { generateMetadata } from './canob-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobShopKeywordPage />;
}
