import HighrateShadowcoresHighscoresKeywordPage, { generateMetadata } from './highrate-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateShadowcoresHighscoresKeywordPage />;
}
