import CurrentRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './current-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRuthlessChaosHighscoresKeywordPage />;
}
