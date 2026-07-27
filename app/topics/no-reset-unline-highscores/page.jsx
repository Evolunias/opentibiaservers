import NoResetUnlineHighscoresKeywordPage, { generateMetadata } from './no-reset-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetUnlineHighscoresKeywordPage />;
}
