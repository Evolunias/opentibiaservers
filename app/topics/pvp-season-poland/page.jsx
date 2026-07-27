import PvpSeasonPolandKeywordPage, { generateMetadata } from './pvp-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSeasonPolandKeywordPage />;
}
