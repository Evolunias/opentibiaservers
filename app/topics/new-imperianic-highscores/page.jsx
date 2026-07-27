import NewImperianicHighscoresKeywordPage, { generateMetadata } from './new-imperianic-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewImperianicHighscoresKeywordPage />;
}
