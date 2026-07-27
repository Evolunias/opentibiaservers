import NoResetImperianicHighscoresKeywordPage, { generateMetadata } from './no-reset-imperianic-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetImperianicHighscoresKeywordPage />;
}
