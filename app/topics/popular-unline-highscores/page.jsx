import PopularUnlineHighscoresKeywordPage, { generateMetadata } from './popular-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineHighscoresKeywordPage />;
}
