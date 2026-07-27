import PvpeSeasonFranceKeywordPage, { generateMetadata } from './pvpe-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeSeasonFranceKeywordPage />;
}
