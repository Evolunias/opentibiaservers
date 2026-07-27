import PopularKasteriaHighscoresKeywordPage, { generateMetadata } from './popular-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaHighscoresKeywordPage />;
}
