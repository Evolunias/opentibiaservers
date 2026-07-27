import LowrateRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './lowrate-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRuthlessChaosHighscoresKeywordPage />;
}
