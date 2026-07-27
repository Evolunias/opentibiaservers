import MarolaotShopKeywordPage, { generateMetadata } from './marolaot-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotShopKeywordPage />;
}
