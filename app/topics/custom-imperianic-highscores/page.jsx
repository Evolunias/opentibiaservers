import CustomImperianicHighscoresKeywordPage, { generateMetadata } from './custom-imperianic-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicHighscoresKeywordPage />;
}
