import WithActivePlayersGuideEuropeKeywordPage, { generateMetadata } from './with-active-players-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersGuideEuropeKeywordPage />;
}
