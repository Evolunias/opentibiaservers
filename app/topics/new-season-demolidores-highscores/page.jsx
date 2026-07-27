import NewSeasonDemolidoresHighscoresKeywordPage, { generateMetadata } from './new-season-demolidores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonDemolidoresHighscoresKeywordPage />;
}
