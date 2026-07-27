import FreshStartTibijkaHighscoresKeywordPage, { generateMetadata } from './fresh-start-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibijkaHighscoresKeywordPage />;
}
