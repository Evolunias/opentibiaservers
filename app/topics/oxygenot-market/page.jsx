import OxygenotMarketKeywordPage, { generateMetadata } from './oxygenot-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotMarketKeywordPage />;
}
