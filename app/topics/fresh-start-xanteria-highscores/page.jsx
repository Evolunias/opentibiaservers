import FreshStartXanteriaHighscoresKeywordPage, { generateMetadata } from './fresh-start-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartXanteriaHighscoresKeywordPage />;
}
