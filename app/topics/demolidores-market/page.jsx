import DemolidoresMarketKeywordPage, { generateMetadata } from './demolidores-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresMarketKeywordPage />;
}
