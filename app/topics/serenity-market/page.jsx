import SerenityMarketKeywordPage, { generateMetadata } from './serenity-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityMarketKeywordPage />;
}
