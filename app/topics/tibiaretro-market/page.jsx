import TibiaretroMarketKeywordPage, { generateMetadata } from './tibiaretro-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroMarketKeywordPage />;
}
