import PopularShadowcoresHighscoresKeywordPage, { generateMetadata } from './popular-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresHighscoresKeywordPage />;
}
