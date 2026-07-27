import RetroSeasonMexicoKeywordPage, { generateMetadata } from './retro-season-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroSeasonMexicoKeywordPage />;
}
