import FreshStartSabrehavenHighscoresKeywordPage, { generateMetadata } from './fresh-start-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSabrehavenHighscoresKeywordPage />;
}
