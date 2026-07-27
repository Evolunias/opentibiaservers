import OfficialImperianicHighscoresKeywordPage, { generateMetadata } from './official-imperianic-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicHighscoresKeywordPage />;
}
