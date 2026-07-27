import NoResetYurotsHighscoresKeywordPage, { generateMetadata } from './no-reset-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetYurotsHighscoresKeywordPage />;
}
