import PopularEternalOdysseyHighscoresKeywordPage, { generateMetadata } from './popular-eternal-odyssey-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEternalOdysseyHighscoresKeywordPage />;
}
