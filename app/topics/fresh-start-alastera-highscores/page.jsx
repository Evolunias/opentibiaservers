import FreshStartAlasteraHighscoresKeywordPage, { generateMetadata } from './fresh-start-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraHighscoresKeywordPage />;
}
