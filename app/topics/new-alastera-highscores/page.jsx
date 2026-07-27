import NewAlasteraHighscoresKeywordPage, { generateMetadata } from './new-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraHighscoresKeywordPage />;
}
