import PopularMediviaHighscoresKeywordPage, { generateMetadata } from './popular-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaHighscoresKeywordPage />;
}
