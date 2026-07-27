import NonPvpSeasonFranceKeywordPage, { generateMetadata } from './non-pvp-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpSeasonFranceKeywordPage />;
}
