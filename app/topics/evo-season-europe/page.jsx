import EvoSeasonEuropeKeywordPage, { generateMetadata } from './evo-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSeasonEuropeKeywordPage />;
}
