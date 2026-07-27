import PvpSeasonUkKeywordPage, { generateMetadata } from './pvp-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSeasonUkKeywordPage />;
}
