import RubinotShopKeywordPage, { generateMetadata } from './rubinot-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotShopKeywordPage />;
}
