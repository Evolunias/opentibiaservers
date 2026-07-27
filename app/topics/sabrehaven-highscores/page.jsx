import SabrehavenHighscoresKeywordPage, { generateMetadata } from './sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenHighscoresKeywordPage />;
}
