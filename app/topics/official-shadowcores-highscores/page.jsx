import OfficialShadowcoresHighscoresKeywordPage, { generateMetadata } from './official-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresHighscoresKeywordPage />;
}
