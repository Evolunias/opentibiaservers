import TopRealeraHighscoresKeywordPage, { generateMetadata } from './top-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealeraHighscoresKeywordPage />;
}
