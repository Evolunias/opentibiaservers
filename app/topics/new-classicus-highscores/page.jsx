import NewClassicusHighscoresKeywordPage, { generateMetadata } from './new-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewClassicusHighscoresKeywordPage />;
}
