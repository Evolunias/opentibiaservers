import NewSeasonRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './new-season-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRuthlessChaosHighscoresKeywordPage />;
}
