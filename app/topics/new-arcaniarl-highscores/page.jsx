import NewArcaniarlHighscoresKeywordPage, { generateMetadata } from './new-arcaniarl-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewArcaniarlHighscoresKeywordPage />;
}
