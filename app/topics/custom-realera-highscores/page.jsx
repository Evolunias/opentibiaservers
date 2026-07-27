import CustomRealeraHighscoresKeywordPage, { generateMetadata } from './custom-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraHighscoresKeywordPage />;
}
