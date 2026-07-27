import BestAlasteraHighscoresKeywordPage, { generateMetadata } from './best-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraHighscoresKeywordPage />;
}
