import OfficialSabrehavenHighscoresKeywordPage, { generateMetadata } from './official-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialSabrehavenHighscoresKeywordPage />;
}
