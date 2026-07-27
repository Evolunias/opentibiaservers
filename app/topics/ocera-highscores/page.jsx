import OceraHighscoresKeywordPage, { generateMetadata } from './ocera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraHighscoresKeywordPage />;
}
