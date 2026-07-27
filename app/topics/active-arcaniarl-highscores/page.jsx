import ActiveArcaniarlHighscoresKeywordPage, { generateMetadata } from './active-arcaniarl-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArcaniarlHighscoresKeywordPage />;
}
