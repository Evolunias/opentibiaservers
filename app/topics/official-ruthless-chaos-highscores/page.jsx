import OfficialRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './official-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRuthlessChaosHighscoresKeywordPage />;
}
