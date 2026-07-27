import BestRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './best-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRuthlessChaosHighscoresKeywordPage />;
}
