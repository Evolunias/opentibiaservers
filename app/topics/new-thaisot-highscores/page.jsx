import NewThaisotHighscoresKeywordPage, { generateMetadata } from './new-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThaisotHighscoresKeywordPage />;
}
