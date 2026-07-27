import CurrentAureraGlobalHighscoresKeywordPage, { generateMetadata } from './current-aurera-global-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAureraGlobalHighscoresKeywordPage />;
}
