import CustomCarlinotHighscoresKeywordPage, { generateMetadata } from './custom-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotHighscoresKeywordPage />;
}
