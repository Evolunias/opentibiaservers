import NoResetSabrehavenHighscoresKeywordPage, { generateMetadata } from './no-reset-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSabrehavenHighscoresKeywordPage />;
}
