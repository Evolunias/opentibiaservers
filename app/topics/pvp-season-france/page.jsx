import PvpSeasonFranceKeywordPage, { generateMetadata } from './pvp-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpSeasonFranceKeywordPage />;
}
