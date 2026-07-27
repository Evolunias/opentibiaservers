import NoResetAureraGlobalHighscoresKeywordPage, { generateMetadata } from './no-reset-aurera-global-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetAureraGlobalHighscoresKeywordPage />;
}
