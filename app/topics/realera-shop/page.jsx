import RealeraShopKeywordPage, { generateMetadata } from './realera-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraShopKeywordPage />;
}
