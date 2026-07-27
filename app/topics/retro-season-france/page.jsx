import RetroSeasonFranceKeywordPage, { generateMetadata } from './retro-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonFranceKeywordPage />;
}
