import PopularCarlinotHighscoresKeywordPage, { generateMetadata } from './popular-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotHighscoresKeywordPage />;
}
