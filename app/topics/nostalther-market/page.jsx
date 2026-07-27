import NostaltherMarketKeywordPage, { generateMetadata } from './nostalther-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherMarketKeywordPage />;
}
