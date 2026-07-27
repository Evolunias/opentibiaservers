import EvoluniaShopKeywordPage, { generateMetadata } from './evolunia-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaShopKeywordPage />;
}
