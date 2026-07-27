import PopularThaisotHighscoresKeywordPage, { generateMetadata } from './popular-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotHighscoresKeywordPage />;
}
