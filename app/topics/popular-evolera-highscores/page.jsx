import PopularEvoleraHighscoresKeywordPage, { generateMetadata } from './popular-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraHighscoresKeywordPage />;
}
