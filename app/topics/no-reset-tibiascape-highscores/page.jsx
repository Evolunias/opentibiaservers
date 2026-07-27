import NoResetTibiascapeHighscoresKeywordPage, { generateMetadata } from './no-reset-tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiascapeHighscoresKeywordPage />;
}
