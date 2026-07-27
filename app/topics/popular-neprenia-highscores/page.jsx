import PopularNepreniaHighscoresKeywordPage, { generateMetadata } from './popular-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaHighscoresKeywordPage />;
}
