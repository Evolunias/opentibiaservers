import CustomElderaHighscoresKeywordPage, { generateMetadata } from './custom-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomElderaHighscoresKeywordPage />;
}
