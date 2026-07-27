import OxygenotShopKeywordPage, { generateMetadata } from './oxygenot-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotShopKeywordPage />;
}
