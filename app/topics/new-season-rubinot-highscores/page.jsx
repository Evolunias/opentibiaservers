import NewSeasonRubinotHighscoresKeywordPage, { generateMetadata } from './new-season-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonRubinotHighscoresKeywordPage />;
}
