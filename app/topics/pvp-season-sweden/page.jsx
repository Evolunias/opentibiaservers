import PvpSeasonSwedenKeywordPage, { generateMetadata } from './pvp-season-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSeasonSwedenKeywordPage />;
}
