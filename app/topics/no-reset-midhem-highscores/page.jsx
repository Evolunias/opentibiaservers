import NoResetMidhemHighscoresKeywordPage, { generateMetadata } from './no-reset-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemHighscoresKeywordPage />;
}
