import CurrentTibijkaHighscoresKeywordPage, { generateMetadata } from './current-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibijkaHighscoresKeywordPage />;
}
