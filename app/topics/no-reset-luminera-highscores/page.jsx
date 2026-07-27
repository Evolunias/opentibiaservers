import NoResetLumineraHighscoresKeywordPage, { generateMetadata } from './no-reset-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraHighscoresKeywordPage />;
}
