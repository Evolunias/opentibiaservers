import NilotMarketKeywordPage, { generateMetadata } from './nilot-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotMarketKeywordPage />;
}
