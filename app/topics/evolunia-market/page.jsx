import EvoluniaMarketKeywordPage, { generateMetadata } from './evolunia-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoluniaMarketKeywordPage />;
}
