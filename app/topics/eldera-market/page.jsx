import ElderaMarketKeywordPage, { generateMetadata } from './eldera-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaMarketKeywordPage />;
}
