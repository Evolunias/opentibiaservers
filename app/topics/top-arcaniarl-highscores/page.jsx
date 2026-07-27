import TopArcaniarlHighscoresKeywordPage, { generateMetadata } from './top-arcaniarl-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlHighscoresKeywordPage />;
}
