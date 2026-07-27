import PopularYurotsHighscoresKeywordPage, { generateMetadata } from './popular-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularYurotsHighscoresKeywordPage />;
}
