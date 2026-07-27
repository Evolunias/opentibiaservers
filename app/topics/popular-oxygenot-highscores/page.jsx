import PopularOxygenotHighscoresKeywordPage, { generateMetadata } from './popular-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotHighscoresKeywordPage />;
}
