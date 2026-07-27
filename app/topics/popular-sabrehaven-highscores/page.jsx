import PopularSabrehavenHighscoresKeywordPage, { generateMetadata } from './popular-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenHighscoresKeywordPage />;
}
