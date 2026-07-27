import ActiveSabrehavenHighscoresKeywordPage, { generateMetadata } from './active-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenHighscoresKeywordPage />;
}
