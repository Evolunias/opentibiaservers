import CurrentMidhemHighscoresKeywordPage, { generateMetadata } from './current-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMidhemHighscoresKeywordPage />;
}
