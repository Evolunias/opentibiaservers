import CurrentShadowcoresHighscoresKeywordPage, { generateMetadata } from './current-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresHighscoresKeywordPage />;
}
