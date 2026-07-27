import NewCarlinotHighscoresKeywordPage, { generateMetadata } from './new-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCarlinotHighscoresKeywordPage />;
}
