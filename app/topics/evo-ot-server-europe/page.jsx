import EvoOtServerEuropeKeywordPage, { generateMetadata } from './evo-ot-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOtServerEuropeKeywordPage />;
}
