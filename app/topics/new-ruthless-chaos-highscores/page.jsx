import NewRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './new-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRuthlessChaosHighscoresKeywordPage />;
}
