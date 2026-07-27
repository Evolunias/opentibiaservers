import AmeraHighscoresKeywordPage, { generateMetadata } from './amera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeraHighscoresKeywordPage />;
}
