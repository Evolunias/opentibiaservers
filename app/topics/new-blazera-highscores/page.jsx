import NewBlazeraHighscoresKeywordPage, { generateMetadata } from './new-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewBlazeraHighscoresKeywordPage />;
}
