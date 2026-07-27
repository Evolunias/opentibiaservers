import CurrentTibianusHighscoresKeywordPage, { generateMetadata } from './current-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibianusHighscoresKeywordPage />;
}
