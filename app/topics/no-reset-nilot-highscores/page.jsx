import NoResetNilotHighscoresKeywordPage, { generateMetadata } from './no-reset-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotHighscoresKeywordPage />;
}
