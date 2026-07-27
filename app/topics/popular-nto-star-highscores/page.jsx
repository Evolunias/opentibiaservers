import PopularNtoStarHighscoresKeywordPage, { generateMetadata } from './popular-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNtoStarHighscoresKeywordPage />;
}
