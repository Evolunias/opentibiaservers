import LowrateArcaniarlHighscoresKeywordPage, { generateMetadata } from './lowrate-arcaniarl-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateArcaniarlHighscoresKeywordPage />;
}
