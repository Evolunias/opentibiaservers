import QuinteraHighscoresKeywordPage, { generateMetadata } from './quintera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <QuinteraHighscoresKeywordPage />;
}
