import TibiantisShopKeywordPage, { generateMetadata } from './tibiantis-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisShopKeywordPage />;
}
