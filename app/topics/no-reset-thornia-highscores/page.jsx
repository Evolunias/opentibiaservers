import NoResetThorniaHighscoresKeywordPage, { generateMetadata } from './no-reset-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaHighscoresKeywordPage />;
}
