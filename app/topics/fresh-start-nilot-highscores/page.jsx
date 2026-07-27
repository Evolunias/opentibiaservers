import FreshStartNilotHighscoresKeywordPage, { generateMetadata } from './fresh-start-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNilotHighscoresKeywordPage />;
}
