import HighrateSabrehavenHighscoresKeywordPage, { generateMetadata } from './highrate-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenHighscoresKeywordPage />;
}
