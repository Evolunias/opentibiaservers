import FreshStartTibiantisHighscoresKeywordPage, { generateMetadata } from './fresh-start-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiantisHighscoresKeywordPage />;
}
