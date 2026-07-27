import ShadowcoresHighscoresKeywordPage, { generateMetadata } from './shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresHighscoresKeywordPage />;
}
