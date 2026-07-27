import FreshStartEvoluniaHighscoresKeywordPage, { generateMetadata } from './fresh-start-evolunia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartEvoluniaHighscoresKeywordPage />;
}
