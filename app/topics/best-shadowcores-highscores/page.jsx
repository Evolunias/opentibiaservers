import BestShadowcoresHighscoresKeywordPage, { generateMetadata } from './best-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresHighscoresKeywordPage />;
}
