import TopNtoStarHighscoresKeywordPage, { generateMetadata } from './top-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNtoStarHighscoresKeywordPage />;
}
