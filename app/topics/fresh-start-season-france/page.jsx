import FreshStartSeasonFranceKeywordPage, { generateMetadata } from './fresh-start-season-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSeasonFranceKeywordPage />;
}
