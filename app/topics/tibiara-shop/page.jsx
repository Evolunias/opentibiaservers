import TibiaraShopKeywordPage, { generateMetadata } from './tibiara-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraShopKeywordPage />;
}
