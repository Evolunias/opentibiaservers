import PopularClassicusHighscoresKeywordPage, { generateMetadata } from './popular-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusHighscoresKeywordPage />;
}
