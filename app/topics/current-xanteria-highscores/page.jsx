import CurrentXanteriaHighscoresKeywordPage, { generateMetadata } from './current-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentXanteriaHighscoresKeywordPage />;
}
