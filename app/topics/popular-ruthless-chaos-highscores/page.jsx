import PopularRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './popular-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRuthlessChaosHighscoresKeywordPage />;
}
