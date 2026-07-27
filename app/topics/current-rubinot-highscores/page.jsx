import CurrentRubinotHighscoresKeywordPage, { generateMetadata } from './current-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRubinotHighscoresKeywordPage />;
}
