import TopShadowcoresHighscoresKeywordPage, { generateMetadata } from './top-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresHighscoresKeywordPage />;
}
