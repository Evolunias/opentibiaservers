import TibiaoriginsMarketKeywordPage, { generateMetadata } from './tibiaorigins-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsMarketKeywordPage />;
}
