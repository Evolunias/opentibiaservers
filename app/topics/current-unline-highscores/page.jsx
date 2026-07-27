import CurrentUnlineHighscoresKeywordPage, { generateMetadata } from './current-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentUnlineHighscoresKeywordPage />;
}
