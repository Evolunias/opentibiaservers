import JuleraHighscoresKeywordPage, { generateMetadata } from './julera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JuleraHighscoresKeywordPage />;
}
