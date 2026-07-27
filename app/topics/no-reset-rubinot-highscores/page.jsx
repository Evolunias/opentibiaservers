import NoResetRubinotHighscoresKeywordPage, { generateMetadata } from './no-reset-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRubinotHighscoresKeywordPage />;
}
