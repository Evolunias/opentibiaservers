import TopRuthlessChaosHighscoresKeywordPage, { generateMetadata } from './top-ruthless-chaos-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRuthlessChaosHighscoresKeywordPage />;
}
