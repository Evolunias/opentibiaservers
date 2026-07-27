import NewClassickDrakoriaHighscoresKeywordPage, { generateMetadata } from './new-classick-drakoria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassickDrakoriaHighscoresKeywordPage />;
}
