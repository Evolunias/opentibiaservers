import CurrentEternalOdysseyHighscoresKeywordPage, { generateMetadata } from './current-eternal-odyssey-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEternalOdysseyHighscoresKeywordPage />;
}
