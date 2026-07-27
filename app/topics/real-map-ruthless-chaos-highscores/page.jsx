import RealMapRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './real-map-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRuthlessChaosHighscoresKeywordPage />;
}
