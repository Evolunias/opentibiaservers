import CurrentArcaniarlHighscoresKeywordPage, { generateMetadata } from './current-arcaniarl-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArcaniarlHighscoresKeywordPage />;
}
