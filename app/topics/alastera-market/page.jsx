import AlasteraMarketKeywordPage, { generateMetadata } from './alastera-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraMarketKeywordPage />;
}
