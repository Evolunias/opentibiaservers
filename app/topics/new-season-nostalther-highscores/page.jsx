import NewSeasonNostaltherHighscoresKeywordPage, { generateMetadata } from './new-season-nostalther-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonNostaltherHighscoresKeywordPage />;
}
