import AureraGlobalShopKeywordPage, { generateMetadata } from './aurera-global-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalShopKeywordPage />;
}
