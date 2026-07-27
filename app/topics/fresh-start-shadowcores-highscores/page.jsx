import FreshStartShadowcoresHighscoresKeywordPage, { generateMetadata } from './fresh-start-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartShadowcoresHighscoresKeywordPage />;
}
