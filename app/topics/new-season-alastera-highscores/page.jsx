import NewSeasonAlasteraHighscoresKeywordPage, { generateMetadata } from './new-season-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonAlasteraHighscoresKeywordPage />;
}
