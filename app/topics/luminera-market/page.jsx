import LumineraMarketKeywordPage, { generateMetadata } from './luminera-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraMarketKeywordPage />;
}
