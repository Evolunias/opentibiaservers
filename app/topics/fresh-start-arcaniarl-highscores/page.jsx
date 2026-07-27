import FreshStartArcaniarlHighscoresKeywordPage, { generateMetadata } from './fresh-start-arcaniarl-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartArcaniarlHighscoresKeywordPage />;
}
