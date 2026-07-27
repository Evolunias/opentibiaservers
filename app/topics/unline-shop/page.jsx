import UnlineShopKeywordPage, { generateMetadata } from './unline-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineShopKeywordPage />;
}
