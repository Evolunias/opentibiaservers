import NewTibianusHighscoresKeywordPage, { generateMetadata } from './new-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibianusHighscoresKeywordPage />;
}
