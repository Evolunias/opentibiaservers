import TibiameShopKeywordPage, { generateMetadata } from './tibiame-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameShopKeywordPage />;
}
