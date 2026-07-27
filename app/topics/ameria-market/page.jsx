import AmeriaMarketKeywordPage, { generateMetadata } from './ameria-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaMarketKeywordPage />;
}
