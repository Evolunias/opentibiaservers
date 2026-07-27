import NonPvpSeasonEuropeKeywordPage, { generateMetadata } from './non-pvp-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSeasonEuropeKeywordPage />;
}
