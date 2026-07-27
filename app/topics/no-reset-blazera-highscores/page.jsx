import NoResetBlazeraHighscoresKeywordPage, { generateMetadata } from './no-reset-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBlazeraHighscoresKeywordPage />;
}
