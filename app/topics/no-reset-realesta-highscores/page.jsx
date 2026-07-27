import NoResetRealestaHighscoresKeywordPage, { generateMetadata } from './no-reset-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealestaHighscoresKeywordPage />;
}
