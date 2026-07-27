import PopularMidhemHighscoresKeywordPage, { generateMetadata } from './popular-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMidhemHighscoresKeywordPage />;
}
