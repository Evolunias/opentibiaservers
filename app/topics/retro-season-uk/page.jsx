import RetroSeasonUkKeywordPage, { generateMetadata } from './retro-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonUkKeywordPage />;
}
