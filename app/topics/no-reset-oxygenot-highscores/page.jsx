import NoResetOxygenotHighscoresKeywordPage, { generateMetadata } from './no-reset-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOxygenotHighscoresKeywordPage />;
}
