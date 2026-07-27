import RealestaShopKeywordPage, { generateMetadata } from './realesta-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaShopKeywordPage />;
}
