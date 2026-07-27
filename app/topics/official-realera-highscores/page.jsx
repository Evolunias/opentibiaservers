import OfficialRealeraHighscoresKeywordPage, { generateMetadata } from './official-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraHighscoresKeywordPage />;
}
