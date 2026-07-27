import PopularBlazeraHighscoresKeywordPage, { generateMetadata } from './popular-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularBlazeraHighscoresKeywordPage />;
}
