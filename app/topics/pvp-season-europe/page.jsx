import PvpSeasonEuropeKeywordPage, { generateMetadata } from './pvp-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSeasonEuropeKeywordPage />;
}
