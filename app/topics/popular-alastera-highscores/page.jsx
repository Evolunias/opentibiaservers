import PopularAlasteraHighscoresKeywordPage, { generateMetadata } from './popular-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAlasteraHighscoresKeywordPage />;
}
