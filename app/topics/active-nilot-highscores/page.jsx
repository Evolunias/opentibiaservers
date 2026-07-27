import ActiveNilotHighscoresKeywordPage, { generateMetadata } from './active-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotHighscoresKeywordPage />;
}
