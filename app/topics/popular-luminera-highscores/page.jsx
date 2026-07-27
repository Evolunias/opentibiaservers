import PopularLumineraHighscoresKeywordPage, { generateMetadata } from './popular-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraHighscoresKeywordPage />;
}
