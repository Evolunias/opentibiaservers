import PopularXanteriaHighscoresKeywordPage, { generateMetadata } from './popular-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularXanteriaHighscoresKeywordPage />;
}
