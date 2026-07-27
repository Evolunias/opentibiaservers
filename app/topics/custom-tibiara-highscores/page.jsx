import CustomTibiaraHighscoresKeywordPage, { generateMetadata } from './custom-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraHighscoresKeywordPage />;
}
