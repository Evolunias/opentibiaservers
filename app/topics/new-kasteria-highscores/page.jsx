import NewKasteriaHighscoresKeywordPage, { generateMetadata } from './new-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewKasteriaHighscoresKeywordPage />;
}
