import RetroSeasonBrazilKeywordPage, { generateMetadata } from './retro-season-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonBrazilKeywordPage />;
}
