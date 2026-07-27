import RetroSeasonGermanyKeywordPage, { generateMetadata } from './retro-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonGermanyKeywordPage />;
}
