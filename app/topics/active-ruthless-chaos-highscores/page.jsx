import ActiveRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './active-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRuthlessChaosHighscoresKeywordPage />;
}
