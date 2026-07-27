import ActiveShadowcoresHighscoresKeywordPage, { generateMetadata } from './active-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresHighscoresKeywordPage />;
}
