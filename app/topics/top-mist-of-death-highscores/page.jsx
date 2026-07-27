import TopMistOfDeathHighscoresKeywordPage, { generateMetadata } from './top-mist-of-death-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMistOfDeathHighscoresKeywordPage />;
}
