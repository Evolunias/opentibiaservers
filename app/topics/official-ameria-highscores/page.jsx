import OfficialAmeriaHighscoresKeywordPage, { generateMetadata } from './official-ameria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAmeriaHighscoresKeywordPage />;
}
