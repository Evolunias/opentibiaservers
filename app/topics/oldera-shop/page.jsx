import OlderaShopKeywordPage, { generateMetadata } from './oldera-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaShopKeywordPage />;
}
