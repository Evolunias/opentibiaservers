import NewSeasonShadowcoresHighscoresKeywordPage, { generateMetadata } from './new-season-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonShadowcoresHighscoresKeywordPage />;
}
