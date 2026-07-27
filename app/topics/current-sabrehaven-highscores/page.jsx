import CurrentSabrehavenHighscoresKeywordPage, { generateMetadata } from './current-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenHighscoresKeywordPage />;
}
