import NewXanteriaHighscoresKeywordPage, { generateMetadata } from './new-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewXanteriaHighscoresKeywordPage />;
}
