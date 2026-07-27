import PvpSeasonGermanyKeywordPage, { generateMetadata } from './pvp-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSeasonGermanyKeywordPage />;
}
