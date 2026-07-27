import CurrentMediviaHighscoresKeywordPage, { generateMetadata } from './current-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMediviaHighscoresKeywordPage />;
}
