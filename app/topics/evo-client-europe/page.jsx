import EvoClientEuropeKeywordPage, { generateMetadata } from './evo-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientEuropeKeywordPage />;
}
